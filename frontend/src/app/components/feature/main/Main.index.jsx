"use client";

import React, { useState, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import styles from "./main.module.scss";
import MandaraIndex from "@/app/components/feature/main/mandara/Mandara.index";

export default function MainIndex() {
    const [markdown, setMarkdown] = useState('');

    const fetchMarkdown = useCallback(async (curriculumName) => {
        const response = await fetch(`http://localhost:8080/api/quests/getquests/${curriculumName}`);
        const mdText = await response.text();
        setMarkdown(mdText);
    }, []);

    // リンクのURLを変換する関数
    const urlTransform = (uri) => {
        const basePath = 'https://github.com/APPRENTICE-jp/apprentice/blob/3rd';
        if (uri.startsWith('/skilldoc') || uri.startsWith('/quest')) {
            return `${basePath}${uri}`;
        }
        return uri;
    };



  const markdownComponents = {
    a: ({node, ...props}) => (
      <a {...props} href={urlTransform(props.href)}  target="_blank" rel="noopener noreferrer">
        {props.children}
      </a>
    ),
  };

    return (
        <div className={styles.main}>
            <div className={styles.mandara}>
                <MandaraIndex fetchMarkdown={fetchMarkdown} />
            </div>
          {/*  <div className={styles.progress}>
                カリキュラム進行パーセント
            </div> */}
            <div className={styles.quests}>
                <ReactMarkdown 
                  children={markdown} 
                  remarkPlugins={[remarkGfm]} 
                  rehypePlugins={[rehypeRaw]} 
                  components={markdownComponents}
                />
            </div>
        </div>
    );
}
