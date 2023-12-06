/* eslint-disable no-undef */
import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }
  return data;
}

async function uploadFile(imageName, image) {
  const { data, error } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, image);

  if (error) {
    console.error("Error uploading image:", error);
    throw new Error("Error uploading image.");
  } else {
    console.log("Image uploaded successfully:", data);
  }
}

export async function createCabin(newCabin) {
  const imageName = `${newCabin.image.name}`;
  console.log("ImageName:", imageName);
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  console.log(newCabin.image);

  console.log("Image Path:", imagePath);

  // 1. Create cabin
  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: imagePath }]);

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be Created");
  }

  // Upload Image
  await uploadFile(imageName, newCabin.image);

  // 3. Delete the cabin if there was an error uploading image
  if (error) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.log(error);
    throw new Error("Error uploading image. Cabin deleted.");
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be Deleted");
  }
  return data;
}
