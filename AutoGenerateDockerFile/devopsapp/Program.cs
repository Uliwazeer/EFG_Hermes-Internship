var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/", () => "Hello,From EFG Hermes DevOps Team,Engineering manger saaed, team (Ghamraway, Bashandy)!");

app.Run();
