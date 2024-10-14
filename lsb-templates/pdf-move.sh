#!/usr/bin/env bash
pdflink=$(yq '.pdflink' metadata.yaml)

rm -rf "$pdflink";  cp lsb-pdf-template.pdf "$pdflink"; cp "$pdflink" /Users/ezgranet/Documents/GitHub/mywebsite/docs/"$pdflink"; cd  /Users/ezgranet/Documents/GitHub/mywebsite; git pull; git add --all; git commit -a -m "new files"; git push; cd  /Users/ezgranet/Desktop/lsb; osascript -e 'display notification "PDF upload completed"'
	