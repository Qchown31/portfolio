import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Portfolio</Link>
          </li>
          <li>
            <Link to="/new-meetup">About</Link>
          </li>
          <li>
            <Link to="/new-meetup">Resume</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
