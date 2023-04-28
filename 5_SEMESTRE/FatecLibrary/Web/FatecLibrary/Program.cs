using FatecLibrary.Services;
using FatecLibrary.Services.Interfaces;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllersWithViews();

builder.Services.AddControllersWithViews();

builder.Services.AddHttpClient("BookAPI", c =>
{
    c.BaseAddress = new Uri(builder.Configuration["ServiceUri:BookAPI"]);
});

builder.Services.AddScoped<IPublishingService, PublishingService>();
builder.Services.AddScoped<IBookService, BookService>();

var app = builder.Build();

if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");

    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
