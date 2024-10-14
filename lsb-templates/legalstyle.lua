-- local link_to_toc = pandoc.Link({pandoc.Str '↑'}, '#TOC')

function Header (h)
  h.content = h.content .. {pandoc.Space(), link_to_toc}
  return h
end

-- how many notes we've seen yet.
local note_number = 0
local fn_opening_template = [[<input id="fn-%d" type="checkbox"><label for="fn-%d">%d</label><small>&ensp;]]
local fn_close = '</small>'
local style_css = [[]]

-- Use custom HTML for footnotes.
function Note (note)
  note_number = note_number + 1
  local fn_open = fn_opening_template:format(
    note_number, note_number, note_number
  )  -- Fix: Remove the extra number in the format call
  return {
    pandoc.RawInline('html', fn_open),
    pandoc.Span(
      pandoc.utils.blocks_to_inlines(note.content),
      pandoc.Attr(string.format('fn-%d-content', note_number))
    ),
    pandoc.RawInline('html', fn_close)
  }
end

function Meta (meta)
  local header_includes = meta['header-includes']
  -- ensure that header_includes is a MetaList
  if not header_includes then
    header_includes = pandoc.MetaList{}
  elseif header_includes.t ~= 'MetaList' then
    header_includes = pandoc.MetaList {header_includes}
  end
  table.insert(
    header_includes,
    pandoc.MetaBlocks{pandoc.RawBlock('html', style_css)}
  )
  meta['header-includes'] = header_includes
  return meta
end

local sc_opening_template = [[<span class="sc3">]]
local sc_close = '</span>'

-- Use custom HTML for small caps.
function SmallCaps (s)
  local sc_open = sc_opening_template
  local sc_close = sc_close
  return {
    pandoc.RawInline('html', sc_open),
    pandoc.Span(s.content),
    pandoc.RawInline('html', sc_close)  -- Fix: Ensure that the HTML tags are wrapped correctly
  }
end


local first_paragraph = true

function Para(el)
  if first_paragraph then
    first_paragraph = false
    -- Wrap the first paragraph in a Div with the class "first"
    return pandoc.Div({el}, {class = "first"})
  end
  return el
end