using Microsoft.EntityFrameworkCore;
using OfficeOpenXml;
using WorldCities.Server.Data;
using System.Text.Json;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers().AddJsonOptions(options =>
{
    //options.JsonSerializerOptions.WriteIndented = true;
    //options.JsonSerializerOptions.PropertyNamingPolicy = null;
});

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<ApplicationDbContext>(
    options =>
        options.UseSqlServer(
            builder.Configuration.GetConnectionString("DefaultConnection")));

/**
 * Configurar la política de CORS.
 * No está en el libro, pero sin esto, el frontend en Angular no podrá
 * consumir la API.
 */
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngular",
        policy =>
        {
            policy.WithOrigins("https://localhost:4200", "https://127.0.0.1:4200") // origen del frontend
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});

var app = builder.Build();

// === *** ===

app.UseDefaultFiles();
app.UseStaticFiles();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();

// Usar la política de CORS
app.UseCors("AllowAngular");

app.MapControllers();
app.MapFallbackToFile("/index.html");

ExcelPackage.License.SetNonCommercialPersonal("Gerardo Tordoya");

app.Run();
