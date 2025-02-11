<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

You may also try the [Laravel Bootcamp](https://bootcamp.laravel.com), where you will be guided through building a modern Laravel application from scratch.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains thousands of video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Laravel Sponsors

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the [Laravel Partners program](https://partners.laravel.com).

### Premium Partners

- **[Vehikl](https://vehikl.com/)**
- **[Tighten Co.](https://tighten.co)**
- **[WebReinvent](https://webreinvent.com/)**
- **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
- **[64 Robots](https://64robots.com)**
- **[Curotec](https://www.curotec.com/services/technologies/laravel/)**
- **[Cyber-Duck](https://cyber-duck.co.uk)**
- **[DevSquad](https://devsquad.com/hire-laravel-developers)**
- **[Jump24](https://jump24.co.uk)**
- **[Redberry](https://redberry.international/laravel/)**
- **[Active Logic](https://activelogic.com)**
- **[byte5](https://byte5.de)**
- **[OP.GG](https://op.gg)**

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).


No overload matches this call.
  Overload 1 of 4, '(name: undefined, params: undefined, absolute?: boolean | undefined, config?: Config | undefined): Router', gave the following error.
    Argument of type 'string & {}' is not assignable to parameter of type 'undefined'.
  Overload 2 of 4, '(name: string & {}, params?: RouteParams<string & {}> | undefined, absolute?: boolean | undefined, config?: Config | undefined): string', gave the following error.
    Argument of type '{ location: URL; }' is not assignable to parameter of type 'Config'.
      Type '{ location: URL; }' is missing the following properties from type 'Config': url, port, defaults, routes
  Overload 3 of 4, '(name: string & {}, params?: ParameterValue | undefined, absolute?: boolean | undefined, config?: Config | undefined): string', gave the following error.
   Argument of type '{ location: URL; }' is not assignable to parameter of type 'Config'.
      Type '{ location: URL; }' is missing the following properties from type 'Config': url, port, defaults, routests(2769)
(alias) route(name: undefined, params: undefined, absolute?: boolean, config?: Config): Router (+3 overloads)
import route
Ziggy's route helper.







import PublicLayout from '@/Layouts/PublicLayout';
import ProposImage from '@/types/imagetype';
import React from 'react';
import BlurFade from "@/Components/ui/blur-fade";
import { LineShadowText } from "@/Components/ui/line-shadow-text";
import { useTheme } from "next-themes";
import 'lazysizes';
import { Head } from '@inertiajs/react'


interface PropsImageType{
  images:ProposImage[];
}

const Index:React.FC<PropsImageType> = ({images}) => {
    const theme = useTheme();
    const shadowColor = theme.resolvedTheme === "dark" ? "white" : "black";

    const imagees = Array.from({ length: 9 }, (_, i) => {
        const isLandscape = i % 2 === 0;
        const width = isLandscape ? 800 : 600;
        const height = isLandscape ? 600 : 800;
        return `https://picsum.photos/seed/${i + 1}/${width}/${height}`;
      }); 
       
    return (
        <PublicLayout>
            <Head title="Galerie Joel : Chefs-d'Œuvre de Rendu 3D avec SketchUp | Joel Assi">
                    <meta name="description" content="Plongez dans la Galerie Joel pour explorer des créations époustouflantes en rendu 3D. V-ray, Lumion ; Enscape avec SketchUp par Joel Assi, publié en 2025" />
                    <meta name="keywords" content="galerie rendu 3D, Joel Assi, SketchUp, V-ray formation, Lumion projets, Enscape visualisation, portfolio 3D" />
            </Head>
            <main className='mt-12 md:mt-32'>
            <section id="photos">
                <div className="columns-2 gap-4 sm:columns-3">
                    {images && images.map((image, index) => (
                    <BlurFade key={index} delay={0.25 + index * 0.05} inView>
                        <img
                        className="mb-4 size-full rounded-lg object-contain lazyload"
                        decoding="async"
                        data-sizes="auto"
                        data-src={image.url}
                        alt={image.name}
                        width={image.width}
                        height={image.height}
                        />
                    </BlurFade>
                    ))}
                </div>
             </section>
           
                {images.length==0 &&(
                    <h1 className="text-balance text-5xl font-semibold leading-none tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl text-center">
                    Aucun
                    <LineShadowText className="italic mx-2" shadowColor={shadowColor}>
                        Images
                    </LineShadowText>
                   </h1>
                )}
            
            </main>
        </PublicLayout>
    );
};

export default Index;