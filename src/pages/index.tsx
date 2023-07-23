import { Layout } from "@/components/common";
import Keyword from "@/components/Keyword";
import Typing from "@/components/Typing";
import { correctTextState } from "@/recoil/atom";
import { FormEvent, useEffect, useState } from "react";
import { useRecoilState } from "recoil";

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [correctText, setCorrectText] = useRecoilState(correctTextState);

  const handleSubmit = (e: FormEvent<HTMLFormElement>, keyword: string) => {
    e.preventDefault();
    setKeyword(keyword);
    setSubmitted(true);
  };

  useEffect(() => {
    if (!submitted && correctText.length) {
      setCorrectText([]);
    }
  }, []);

  return (
    <Layout>
      {!submitted && <Keyword onSubmit={handleSubmit} />}
      {submitted && <Typing keyword={keyword} setSubmitted={setSubmitted} />}
    </Layout>
  );
}
