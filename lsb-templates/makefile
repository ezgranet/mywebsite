TEX = pandoc
src1 = lsb-pdf-template.tex metadata.yaml
src2 = lsb-html-template.tex metadata.yaml
FLAGS = --pdf-engine=lualatex
PDFLINK=$(yq '.pdflink' metadata.yaml)

lsb-pdf-template.pdf : $(src1)
		$(TEX) $(filter-out $<,$^ ) -o $@ --template=$< $(FLAGS); osascript -e 'display notification "PDF typeset completed"'





.PHONY: clean
clean :
	rm lsb-pdf-template.pdf
