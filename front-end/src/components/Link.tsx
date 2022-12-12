import NextLink from 'next/link';
export { Link };

interface LinkProps {
  href: any, 
  children: any
}

function Link({ ...props }, linkProp: LinkProps): JSX.Element {
  return (
    <NextLink href={linkProp?.href}>
      <a {...props}>
        {linkProp?.children}
      </a>
    </NextLink>
  );
}
