type ViewerData = {
   name: string;
   avatarUrl: string;
 };
 
 type GetViewerResponse = {
   data: {
     viewer: ViewerData;
   };
 };
  // Example query
  const GET_VIEWER_QUERY = `
  query {
    viewer {
      name
      avatarUrl
    }
  }
`;

 async function fetchGraphQL(query: string, variables = {}) {
   const url = 'https://api.github.com/graphql'; // Replace with your GraphQL API URL
   const token = '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'; // Replace with your Personal Access Token (PAT)
 
   const response = await fetch(url, {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
       Authorization: `Bearer ${token}`,
     },
     body: JSON.stringify({ query, variables }),
   });
 
   const responseBody =( await response.json()) as unknown;
    assertIsGetViewerResponse(responseBody);
   
    return responseBody.data
 }
 
 
function assertIsGetViewerResponse(response: any): asserts response is GetViewerResponse {
   if (!('data' in response)) {
     throw new Error("response doesn't contain data");
   }
   if (typeof response.data !== 'object') {
     throw new Error('response is not an object');
   }
   if (!('viewer' in response.data)) {
     throw new Error("data doesn't contain viewer");
   }
   if (typeof response.data.viewer !== 'object') {
     throw new Error('viewer is not an object');
   }
   if (!('name' in response.data.viewer)) {
     throw new Error("viewer doesn't contain name");
   }
   if (typeof response.data.viewer.name !== 'string') {
     throw new Error('viewer name is not a string');
   }
   if (!('avatarUrl' in response.data.viewer)) {
     throw new Error("viewer doesn't contain avatarUrl");
   }
   if (typeof response.data.viewer.avatarUrl !== 'string') {
     throw new Error('viewer avatarUrl is not a string');
   }
 }

 // Example usage
 async function fetchViewerData(): Promise<void> {
   try {
      const data = await fetchGraphQL(GET_VIEWER_QUERY);
      const viewerName = data.viewer.name
     console.log('Viewer data:', viewerName);
   } catch (error) {
     console.error('Error fetching viewer data:', error);
   }
 }
 
 // Call the function
 fetchViewerData();
 