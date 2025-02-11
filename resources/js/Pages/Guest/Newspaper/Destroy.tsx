import PublicLayout from '@/Layouts/PublicLayout';
import { Head } from '@inertiajs/react'



const Destroy= () => {
    return (
        <PublicLayout>
            <Head title="">
                    <meta name="description" content="" />
                    <meta name="keywords" content="" />
            </Head>
            <main className='mt-12 md:mt-32'>
                 <h1 className='text-center my-20 text-4xl'>Vous êtes désabonné avec succès.</h1>
            </main>
        </PublicLayout>
    );
};

export default Destroy;