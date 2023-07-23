import { Layout } from "@/components/common";
import Keyword from "@/components/Keyword";
import Typing from "@/components/Typing";
import { FormEvent, useState } from "react";

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>, keyword: string) => {
    e.preventDefault();
    setKeyword(keyword);
    setSubmitted(true);
  };

  return (
    <Layout>
      {!submitted && <Keyword onSubmit={handleSubmit} />}
      {submitted && <Typing keyword={keyword} />}
    </Layout>
  );
}
