export const Analytics = () => (
  <>
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING}`}
    >
      <script
        dangerouslySetInnerHTML={{
          __html: `  window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js' newDate());
          gtag('config'm '${process.env.NEXT_PUBLIC_GA_TRACKING}', {
            page_path: window.location.pathname,
          });
          `
        }}
      ></script>
    </script>
  </>
)