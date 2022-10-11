import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="stylesheet" href="/reset.css" />
      </Head>
      <div class="after:content-['ok']"></div>
    </div>
  );
}












