export const siteConfig = {
  name: "Global Vista Educators",
  tagline: "Explore • Educate • Empower",
  description:
    "Connecting Indian students with UK educators for mentorship, exam preparation, STEM support and global academic opportunity.",
  url: "https://www.globalvistaeducators.com",
};

export function buildMetadata({
  title,
  description,
  path = "",
}) {
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} | ${siteConfig.tagline}`;

  return {
    title: fullTitle,
    description: description || siteConfig.description,

    alternates: {
      canonical: `${siteConfig.url}${path}`,
    },

    openGraph: {
      title: fullTitle,
      description: description || siteConfig.description,
      url: `${siteConfig.url}${path}`,
      siteName: siteConfig.name,
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: description || siteConfig.description,
    },
  };
}