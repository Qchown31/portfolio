import { useRouter } from "next/router";

function Dynamic() {
  const router = useRouter();

  router.query.pageTitle;

  return <h1>Dynamic</h1>;
}

export default Dynamic;
