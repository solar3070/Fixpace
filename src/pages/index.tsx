import { Layout } from "@/components/common";
import Keyword from "@/components/Keyword";
import Typing from "@/components/Typing";
import { useState } from "react";

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (keyword: string) => {
    setKeyword(keyword);
    setSubmitted(true);
  };

  return (
    <Layout>
      {!submitted && <Keyword onSubmit={onSubmit} />}
      {submitted && <Typing keyword={keyword} />}
    </Layout>
  );
}
