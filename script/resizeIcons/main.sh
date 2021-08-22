#! /bin/sh

convert script/resizeIcons/icon_orig.png -resize 16x16 icon16.png && \
convert script/resizeIcons/icon_orig.png -resize 32x32 icon32.png && \
convert script/resizeIcons/icon_orig.png -resize 48x48 icon48.png && \
convert script/resizeIcons/icon_orig.png -resize 128x128 icon128.png && \
cp icon16.png icon32.png icon48.png icon128.png src/icons/
