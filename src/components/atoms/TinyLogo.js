import Link from "next/link";
import Image from "next/image";

function TinyLogo() {
  return (
    <Link href="/" passHref>
      <a>
        <Image
          src="/images/tinyLogo.svg"
          width="200"
          height="60"
          alt="Logo do OverJobs"
        />
      </a>
    </Link>
  );
}

export default TinyLogo;
