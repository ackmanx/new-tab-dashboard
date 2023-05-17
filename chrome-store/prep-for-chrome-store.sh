GRAY=$(tput setaf 8)
YELLOW=$(tput setaf 11)
BLUE=$(tput setaf 12)

# Verify we're running in the correct directory
if [ ! -d 'src' ]; then
    echo 'Run this prep script from project root'
    exit 1
fi

printf "\n${BLUE}Creating production build...\n\n"

# Create a production bundle
yarn build

printf "\n${BLUE}Deleting dev-related files from build and old distributable if found...${GRAY}\n\n"

# Remove old package
rm zip-for-chrome-store.zip

cd dist

printf "\n${BLUE}Creating zip file you can upload to Chrome Developer Dashboard...${GRAY}\n\n"

# Create zip to upload to Chrome Store
zip -r ../chrome-store/zip-for-chrome-store.zip *

cd ..

# Delete the build directory created so we don't get confused between it and the store version we have installed
rm -rf dist

printf "\n${YELLOW}Your distributable can be found at: <project_root>/chrome-store/zip-for-chrome-store.zip${GRAY} \n\n"
