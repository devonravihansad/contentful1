export function load({ params }) {
  return {
    title: "My Blog Post",
    slug: params.slug,
  };
}
