import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Metadata } from 'next';
import Link from 'next/link';
import UserAuthForm from './user-auth-form';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Authentication',
  description: 'Authentication forms built using the components.'
};

export default function SignInViewPage() {
  return (
    <div className='relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0'>
      <Link
        href='/examples/authentication'
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'absolute right-4 top-4 hidden md:right-8 md:top-8'
        )}
      >
        Login
      </Link>
      <div className='relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex'>
        <div className='absolute inset-0 bg-zinc-400' />
        <div className='flex flex-row items-center justify-between mx-16'>
          <div className='relative z-20 flex items-center text-lg font-medium'>
            <Image 
              src="/images/logo_unifap.png" 
              width="80"
              height="80"
              style={{width:'100px', height: "auto" }}
              priority={true}
              alt={'Logo UNIFAP'} 
            />
          </div>
          <span className='text-xl z-30'>
            UNIVERSIDADE FEDERAL DO AMAPÁ <br />
            DEPARTAMENTO DE REGISTRO E CONTROLE ACADÊMICO
          </span>
        </div>
        <div className='relative z-20 mt-auto'>
          <blockquote className='space-y-2'>
            <p className='text-lg'>
              &ldquo;Sistema de acompanhamento de Registro e Expedição de Diplomas
              realizados na Universidade Federal do Amapá.&rdquo;
            </p>
            <footer className='text-sm'>Michael Oliveira</footer>
          </blockquote>
        </div>
      </div>
      <div className='flex h-full items-center p-4 lg:p-8'>
        <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
          <div className='flex flex-col space-y-2 text-center'>
            <h1 className='text-2xl font-semibold tracking-tight'>
              Consulta Registro de Diploma
            </h1>
            <p className='text-sm text-muted-foreground'>
              Entre com um email e senha para ter acesso ao sistema
            </p>
          </div>
          <UserAuthForm />
          <p className='px-8 text-center text-sm text-muted-foreground'>
            By clicking continue, you agree to our{' '}
            <Link
              href='/terms'
              className='underline underline-offset-4 hover:text-primary'
            >
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link
              href='/privacy'
              className='underline underline-offset-4 hover:text-primary'
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
