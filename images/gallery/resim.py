import os 
for image in os.listdir("."):
	if image.endswith(".jpg") or image.endswith(".jpeg"):
		command = f"convert -resize 500x333! {image} {image}"
		os.system(command)
print("DONE")
