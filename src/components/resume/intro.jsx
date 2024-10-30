import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Globe, Mail } from 'lucide-react';
import { LinkIcon } from './ui/linkIcon';

export const Intro = ({ data }) => {
  return (
    <section className="flex  gap-4 justify-between items-center">
      <div className="pr-0 sm:pr-10 md:pr-20">
        <h1 className="title  ">{data.name}</h1>
        <p className="font-mono dark:text-gray-100">{data.about}</p>
        <p>
          <Link
            href={data.location.link}
            target="_blank"
            className="flex gap-1 items-center dark:text-gray-100"
          >
            <Globe size={14} />
            {data.location.state}
          </Link>
        </p>
        <div className="flex gap-1 items-center mt-3 ">
          <LinkIcon
            link={`mailto:${data.contact.email}`}
            title="Get in touch"
            className="dark:text-gray-100"
            Icon={Mail}
          />
          {data.contact.social.map(({ name, link, icon: Icon }, i) => (
            <LinkIcon
              key={i}
              className="dark:text-gray-100"
              link={link}
              target="_blank"
              title={name}
              Icon={Icon}
            />
          ))}
        </div>
      </div>
      <div className="rounded-md">
        <Image
          src="/images/logo.png"
          width={170}
          height={170}
          alt="Avatar"
          className="rounded-md"
        />
      </div>
    </section>
  );
};
