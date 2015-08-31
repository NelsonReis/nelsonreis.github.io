---
layout: post
category: Visual Studio, Web
title: When to use NuGet and Bower
metadescription: /images/title-bower.png
---

I believe that [NuGet](http://www.nuget.org/) has been one of the most significant tools added to Visual Studio since it was introduced in the 2010 version. It's hard to imagine anyone working on a .NET project over the last few years and still be able to keep NuGet packages out of the solution.
*Of course I'm being a bit extreme here, but if that's your case, please make a comment below, I really would like to know more details on that.*

<!--excerpt-->

With NuGet we could easily *"add a reference"* to an opensource project, provided it had a NuGet package available, and thus maintain the references updated with a simple action on the UI. That's what helped to drive the .NET development community towards opensource initiatives.


## So, is NuGet dead?

Far from it! But despite all the goodness that NuGet brought to the .NET world (or should I say sweetness), some bitterness arises when working with web frontend NuGet packages (either in plain ASP.NET or ASP.NET MVC projects).
NuGet packages work great for including compiled external libraries into my projects, so I will definitely continue to use NuGet for the backend stuff.

One problem with the frontend NuGet packages (CSS and JavaScript) is that when you add them, each one seems to have it's own will, getting scattered all over the project folders, forcing me to find its files in whichever folder it choses.

Another problem is that there is a lack of NuGet packages for a lot of very used JavaScript libraries, which are available for other web development communities, or at least the available packages take longer to be updated. That makes it seem as if the .NET web development community is lagging behind.


## Introducing Bower

Starting with Visual Studio 2015, the recommended method for adding frontend web packages to your projects is using [**Bower**](http://bower.io/), *a package manager for the web*, as they call it.

Bower packages get installed to a folder with the name of each package inside a `bower_components` folder on the root of your project. No more hunting around the installed files.

If your team or environment uses other tools besides Visual Studio for web development, Bower brings a more clean path to achieve what others are doing, since it's commonly used amongst web developers from other communities (Node.js, for instance). That also brings a bigger number of available packages, as well as faster updates.


## NuGet or Bower?

To be clear, I would recommned all server-side packages to be installed with **NuGet**, for example:

- [Ninject](http://www.nuget.org/packages/Ninject/)
- [EntityFramework](http://www.nuget.org/packages/EntityFramework/)
- [NUnit](http://www.nuget.org/packages/NUnit/)
- [log4net](http://www.nuget.org/packages/log4net/)
- all the [Microsoft.AspNet](http://www.nuget.org/packages?q=microsoft.aspnet) packages (the MVC framework, OWIN, Razor, WebApi, and so on)
- you've got the picture

As for **Bower**, we stick to the web frontend packages, like the ones below:

- [jQuery](http://jquery.com/) ([source](http://github.com/jquery/jquery))
- [Bootstrap](http://getbootstrap.com/) ([source](http://github.com/twbs/bootstrap))
- [AngularJS](http://angularjs.org/) ([source](http://github.com/angular/angular.js))
- [Select2](http://select2.github.io/) ([source](http://github.com/select2/select2))
- [DataTables](http://www.datatables.net/) ([source](http://github.com/DataTables/DataTables))
- [D3.js](http://d3js.org/) ([source](http://github.com/mbostock/d3))
- [Moment.js](http://momentjs.com/) ([source](http://github.com/moment/moment/))


On my next blog post, I'll show you how we can add Bower to a Visual Studio project.
