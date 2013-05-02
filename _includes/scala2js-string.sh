#!/bin/sh

for f in *.scala; do
    fout="${f%scala}html"
    echo "converting '$f' to '$fout'"

    printf '<pre><code>' > $fout
    sed -e 's/$/\\n/' $f | tr -d '\n' >> $fout
    printf '</code></pre>' >> $fout
done
