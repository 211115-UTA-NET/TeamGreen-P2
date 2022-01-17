var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();


var app = builder.Build();

//app.MapGet("/", () => "Hello World!");
app.UseRouting();
app.UseEndpoints(routeBuilder =>
{
    routeBuilder.MapControllers();

});

app.Run();
