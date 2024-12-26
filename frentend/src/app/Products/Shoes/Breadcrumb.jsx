import React from "react";

const Breadcrumb = ({ paths }) => {
  return (
    <nav className="text-gray-500 text-sm m-4 pl-12">
      <ol className="list-none p-0 inline-flex">
        {paths.map((path, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <span className="mx-2">/</span>}
            {index === paths.length - 1 ? (
              <span className="font-semibold text-black">{path.name}</span>
            ) : (
              <a href={path.link} className="hover:underline">
                {path.name}
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
