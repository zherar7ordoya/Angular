using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq.Dynamic.Core;
using WorldCities.Server.Data;
using WorldCities.Server.Data.Models;

namespace WorldCities.Server.Controllers;

[Route("api/[controller]")]
[ApiController]
public class CountriesController(ApplicationDbContext context) : ControllerBase
{
    // GET: api/Countries
    [HttpGet]
    public async Task<ActionResult<ApiResult<CountryDTO>>> GetCountries
    (
        int pageIndex = 0,
        int pageSize = 10,
        string? sortColumn = null,
        string? sortOrder = null,
        string? filterColumn = null,
        string? filterQuery = null
    )
    {
        return await ApiResult<CountryDTO>.CreateAsync(
                context.Countries
                .AsNoTracking()
                .Select(c => new CountryDTO()
                {
                    Id = c.Id,
                    Name = c.Name,
                    ISO2 = c.ISO2,
                    ISO3 = c.ISO3,
                    TotCities = c.Cities!.Count
                }),
                pageIndex,
                pageSize,
                sortColumn,
                sortOrder,
                filterColumn,
                filterQuery);
    }

    // GET: api/Countries/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Country>> GetCountry(int id)
    {
        var country = await context.Countries.FindAsync(id);
        if (country == null) return NotFound();
        return country;
    }

    // PUT: api/Countries/5
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPut("{id}")]
    public async Task<IActionResult> PutCountry(int id, Country country)
    {
        if (id != country.Id) return BadRequest();
        context.Entry(country).State = EntityState.Modified;

        try
        {
            await context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!CountryExists(id)) return NotFound();
            else throw;
        }

        return NoContent();
    }

    // POST: api/Countries
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPost]
    public async Task<ActionResult<Country>> PostCountry(Country country)
    {
        context.Countries.Add(country);
        await context.SaveChangesAsync();
        return CreatedAtAction("GetCountry", new { id = country.Id }, country);
    }

    // DELETE: api/Countries/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteCountry(int id)
    {
        var country = await context.Countries.FindAsync(id);

        if (country == null) return NotFound();
        context.Countries.Remove(country);
        await context.SaveChangesAsync();
        return NoContent();
    }

    private bool CountryExists(int id)
    {
        return context.Countries.Any(e => e.Id == id);
    }

    [HttpPost]
    [Route("IsDupeField")]
    public bool IsDupeField(
    int countryId,
    string fieldName,
    string fieldValue)
    {
        /* Default approach (using strongly-typed LAMBA expressions) */
        //switch (fieldName)
        //{
        //    case "name":
        //        return context.Countries.Any(c => c.Name == fieldValue && c.Id != countryId);
        //    case "iso2":
        //        return context.Countries.Any(c => c.ISO2 == fieldValue && c.Id != countryId);
        //    case "iso3":
        //        return context.Countries.Any(c => c.ISO3 == fieldValue && c.Id != countryId);
        //    default:
        //        return false;
        //}

        /* Alternative approach (using System.Linq.Dynamic.Core) */
        return (ApiResult<Country>.IsValidProperty(fieldName, true))
            && context.Countries
            .Any(string.Format("{0} == @0 && Id != @1", fieldName), fieldValue, countryId);
    }
}
