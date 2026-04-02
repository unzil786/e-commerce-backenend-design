import re, pathlib
content = pathlib.Path('shoes.js').read_text(encoding='utf-8')
content = re.sub(r'Unze London ', "Unzil's ", content)
content = re.sub(r'Stylo ', "Unzil's ", content)
# Fix comments too
content = content.replace("Unzil's.pk Real Images", "Unzil's Real Images")
content = content.replace("Unzil's London", "Unzil's")
pathlib.Path('shoes.js').write_text(content, encoding='utf-8')
print('shoes.js updated successfully!')
