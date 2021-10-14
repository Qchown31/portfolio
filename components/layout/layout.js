import MainNavigation from "./MainNavigation";

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main>{props.children}hellloooo</main>
    </div>
  );
}

export default Layout;
