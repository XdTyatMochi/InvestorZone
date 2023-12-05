import Head from "next/head";

import Post from "../../components/MdxPost";
import MarkdownContent from "../../posts/articles/entering-the-dark-forest.md";

export default function TraversingTheDarkForest() {
  return (
    <>
      <Head>
        <title>HFVision| Traversing The Dark Forest</title>
        <meta
          key=""
          name="How Sohra Peak Capital Partners Outperformed the S&P 500 in Q3 2023"
          content=""
        />
      </Head>
      <Post mdx={<MarkdownContent />} />
    </>
  );
}