import React from "react";
import Image from "next/image";

function Author() {
  return (
    <div className="flex flex-col justify-center items-center pt-2 w-screen lg:max-w-3xl">
      <h1>About Me</h1>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="flex items-center space-x-2 p-3">
          <div className="avatar placeholder">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
              <span className="text-xl">ZK</span>
            </div>
          </div>

          <div>
            <div className="text-lg font-extrabold pl-3">€$¥</div>
            <p className="text-base-content/70 text-xs text-left pl-3 prose">
              I&apos;m a 27 years old self-taught dev &amp; sysadmin building
              stuff.
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full border-opacity-50">
          <div className="divider">MY STACK</div>
        </div>
        <div className="card-body">
          <div className="flex items-center">
            <span className="text-base-content/70 w-48 text-xs">Linux</span>
            <progress
              className="progress w-full"
              value="66"
              max="100"
            ></progress>
          </div>
          <div className="flex items-center">
            <span className="text-base-content/70 w-48 text-xs">Sysadmin</span>
            <progress
              className="progress w-full"
              value="42"
              max="100"
            ></progress>
          </div>
          <div className="flex items-center">
            <span className="text-base-content/70 w-48 text-xs">DevOps</span>
            <progress
              className="progress w-full"
              value="20"
              max="100"
            ></progress>
          </div>
          <div className="flex items-center">
            <span className="text-base-content/70 w-48 text-xs">
              JavaScript
            </span>
            <progress
              className="progress w-full"
              value="50"
              max="100"
            ></progress>
          </div>
          <div className="flex items-center">
            <span className="text-base-content/70 w-48 text-xs">Node.js</span>
            <progress
              className="progress w-full"
              value="66"
              max="100"
            ></progress>
          </div>
          <div className="flex items-center">
            <span className="text-base-content/70 w-48 text-xs">React.js</span>
            <progress
              className="progress w-full"
              value="42"
              max="100"
            ></progress>
          </div>
          <div className="flex items-center">
            <span className="text-base-content/70 w-48 text-xs">Next.js</span>
            <progress
              className="progress w-full"
              value="22"
              max="100"
            ></progress>
          </div>
          <div className="flex items-center">
            <span className="text-base-content/70 w-48 text-xs">
              Tailwindcss
            </span>
            <progress
              className="progress w-full"
              value="42"
              max="100"
            ></progress>
          </div>
          <div className="flex items-center">
            <span className="text-base-content/70 w-48 text-xs">Python</span>
            <progress
              className="progress w-full"
              value="21"
              max="100"
            ></progress>
          </div>
          <div className="flex items-center">
            <span className="text-base-content/70 w-48 text-xs">Rust</span>
            <progress
              className="progress w-full"
              value="33"
              max="100"
            ></progress>
          </div>
          <div className="flex items-center">
            <span className="text-base-content/70 w-48 text-xs">Solidity</span>
            <progress
              className="progress w-full"
              value="10"
              max="100"
            ></progress>
          </div>
          <div className="flex items-center">
            <span className="text-base-content/70 w-48 text-xs">Unity</span>
            <progress
              className="progress w-full"
              value="21"
              max="100"
            ></progress>
          </div>
          <div className="flex items-center">
            <span className="text-base-content/70 w-48 text-xs">Lua</span>
            <progress
              className="progress w-full"
              value="0"
              max="100"
            ></progress>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Author;
