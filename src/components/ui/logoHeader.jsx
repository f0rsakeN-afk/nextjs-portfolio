import Link from 'next/link';

export const LogoHeader = () => {
  return (
    <Link href="/" className=" font-semibold font-mono flex gap-2 items-center">
      <img src="/images/logo.png" alt="" width="30" className="rounded-full " />{' '}
      Naresh
    </Link>
  );
};
