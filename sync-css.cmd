@echo off
xcopy /S /I /E /Y "dist\css\bundle.min.css*" "C:\Dev\Orion\Premier View\Features\Modernization-Orion.IdentityProvider\Orion.IdentityProvider\wwwroot\css"
xcopy /S /I /E /Y "dist\css\login-bundle.min.css*" "C:\Dev\Orion\Premier View\Features\Modernization-Orion.IdentityProvider\Orion.IdentityProvider\wwwroot\css"
xcopy /S /I /E /Y "dist\css\premierportfolio-bundle.min.css*" "C:\Dev\Orion\Premier View\Features\Modernization-InvestorPortal\Web\Content"