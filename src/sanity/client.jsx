import sanityClient from "@sanity/client";

export default sanityClient({
    projectId: "fj82yz56",
    dataset: "production",
    useCdn: true
})