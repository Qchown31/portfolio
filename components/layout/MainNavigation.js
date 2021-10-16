import classes from "./MainNavigation.module.scss";

import Link from "next/link";
import Image from "next/image";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Image src="/qc-logo.png" alt="me" width="50%" height="50%" />
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/">Portfolio</Link>
          </li>
          <li>
            <Link href="/new-meetup">About</Link>
          </li>
          <li>
            <Link href="/new-meetup">Resume</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
