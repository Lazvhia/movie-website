import Link from 'next/link';

export default function MenuItem({address, title, Icon}) {
  return (
    <Link href={address} className='hover:text-purple-500'>
        <Icon className="text-2xl sm:hidden" />
        <p className='uppercase hidden sm:inline text-sm'>{title}</p>
    </Link>
  );
}

