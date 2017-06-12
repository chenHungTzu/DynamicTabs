using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(DynamicTabs.Startup))]
namespace DynamicTabs
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
