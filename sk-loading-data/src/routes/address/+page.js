export const load = async (loadEvent) => {
    const { fetch } = loadEvent;
    const response = await fetch('api/postcodes');
    const postcodes = await response.json();
    const addressList = postcodes.map((postcode) => {
      return `${postcode.postcode},
              ${postcode.line_1},
              ${postcode.line_2},
              ${postcode.line_3},
              ${postcode.latitude},
              ${postcode.longitude},
              ${postcode.post_town}`;
    });
    return { addressList };
  };
