import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="flex gap-2 items-center max-w-xs text-3xl font-semibold leading-2 tracking-tight text-zinc-800">
            Hi there, I'm Fede! <Image src="/hi.gif" width={28} height={28} alt="hi" />
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-800 dark:text-zinc-600">
            I'm a passionate developer who loves building meaningful digital experiences. Feel free to connect with me on{" "}
            <a
              href="https://www.linkedin.com/in/fedegratti/"
              className="font-medium text-zinc-800"
              target="_blank"
            >
              LinkedIn
            </a>{" "}
            or explore my work on{" "}
            <a
              href="https://github.com/fedegratti/"
              className="font-medium text-zinc-800"
              target="_blank"
            >
              GitHub
            </a>
            .
          </p>
        </div>

        <div className="flex flex-col gap-4 w-full max-w-md">
          <h2 className="text-xl font-semibold text-zinc-800">Projects</h2>
          <div className="grid gap-2">
            <a
              href="https://wishfultree.com/"
              className="text-zinc-600 hover:text-zinc-800 transition-colors underline underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wishfultree
            </a>
            <a
              href="https://bdaycake.com/"
              className="text-zinc-600 hover:text-zinc-800 transition-colors underline underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Birthdaycake
            </a>
            <a
              href="https://hill.ohzi.io/"
              className="text-zinc-600 hover:text-zinc-800 transition-colors underline underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tennis Hill
            </a>
            <a
              href="https://lab.ohzi.io/"
              className="text-zinc-600 hover:text-zinc-800 transition-colors underline underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              OHZI Experiments
            </a>
            <a
              href="https://ohzi.io/"
              className="text-zinc-600 hover:text-zinc-800 transition-colors underline underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              OHZI Website
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] md:w-[158px] hover:text-white"
            href="mailto:federicogratti@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Me
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.8] px-5 text-zinc-700 transition-colors hover:border-transparent hover:bg-black/[.8] hover:text-white md:w-[158px]"
            href="/federico_gratti_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>
        </div>
      </main>
    </div>
  );
}
