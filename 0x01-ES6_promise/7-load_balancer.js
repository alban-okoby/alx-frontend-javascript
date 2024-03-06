export default async function loadBalancer(chinaDownload, USDownload) {
  try {
    return await Promise.race([chinaDownload, USDownload]);
  } catch (error) {
    // Handle error if necessary
    throw error;
  }
}
