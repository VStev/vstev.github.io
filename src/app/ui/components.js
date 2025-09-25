/**
 * A reusable Section component.
 * This replaces the repeated sections in the HTML.
 * The `children` prop is a special prop in React that allows you to
 * pass content between the opening and closing tags of a component.
 */
export function Section({title, children}) {
    return (
      <div className="p-6 rounded-xl shadow-lg border-x border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold mb-4 flex items-center space-x-3">
          <span>{title}</span>
        </h2>
        {children}
      </div>
    );
  }
  
export function InnerSection({title, children}){
    return (
      <div className="p-6 rounded-xl shadow-lg border-gray-200 dark:border-gray-700 flex flex-col h-full">
        <h2 className="text-xl font-bold mb-4 flex items-center space-x-3">
          <span>{title}</span>
        </h2>
        {children}
      </div>
    );
  }

export function GameShowcaseSection({title, imageUrl, uid, link}){
    return (
        <div className="p-6 rounded-xl shadow-lg border-gray-200 dark:border-gray-700">
            <div
                className="w-full h-48 rounded-lg mb-2 relative"
                style={{ // Use inline styles to set the background image and gradient
                    backgroundImage: `url(${imageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div // Gradient overlay
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    style={{ // More inline styles for the gradient
                        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 100%)',
                    }}
                />
                <div className="absolute bottom-2 left-2 text-white text-xl font-bold">
                    {title}
                </div>
            </div>
            {link ? (
                <a href={link} target="_blank" rel="noopener noreferrer">
                    {uid}
                </a>
            ) : (
                <p>{uid}</p>
            )}
        </div>
    );
}

export function PictureFrame({caption, imageUrl}){
  return (
    <div>
      <img src={imageUrl} alt={title} className="h-full w-auto rounded-lg mb-2"/>
      <p>{caption}</p>
    </div>
  );
}