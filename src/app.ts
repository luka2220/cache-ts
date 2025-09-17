import deserialize from "./resp/deserialize";
import { tryCatch } from "./utils/error";

const tPromise = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  return await response.json();
};

(async () => {
  // Example of using the tryCatch util function
  const result = await tryCatch(tPromise());
  if (result.error) {
    console.error("An error occurred fetching pokemon data:", {
      name: result.error.name,
      error: result.error.message,
      stack: result.error.stack,
    });
    throw result.error;
  }

  console.log(result.data);
})();
