
import json

with open('letters.json') as f:
  data = json.loads(f.read())
  
def write_svg(letter, form='alone'):
  
  svg = '''
<svg height="100" width="100" viewBox="0 0 100 100">
  <path
    d="{}"
    fill="none"
    stroke="#000"
    stroke-width="5"
  />
</svg>
  '''.format(letter[form])
  
  with open('out/' + form + '/' + letter['filename'] + '.html', 'w') as o:
    o.write(svg)
  
for letter in data:
  base_pathstring = data[letter][data[letter]['baseline']]
  write_svg(data[letter], data[letter]['baseline'])
  write_svg(data[letter], 'alone')
  write_svg(data[letter], 'center')
  
  
    
