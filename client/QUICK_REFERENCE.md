# Quick Reference Guide - Blogify Frontend

## Color Variables Reference

```jsx
// Use these exact hex values in Tailwind classes
Primary Text:    #111827 (text-primary or text-[#111827])
Accent:          #2563EB (bg-blue-600 or bg-[#2563EB])
Background:      #F8FAFC (bg-slate-50 or bg-[#F8FAFC])
Surface:         #FFFFFF (bg-white)
Border:          #E5E7EB (border-gray-200 or border-[#E5E7EB])
Muted Text:      #6B7280 (text-gray-500 or text-[#6B7280])
Success:         #16A34A (text-green-600 or bg-[#16A34A])
Danger:          #DC2626 (bg-red-600 or bg-[#DC2626])
```

## Common Component Patterns

### Import UI Components
```jsx
import { Button, Card, Input, Badge, Spinner, Table, TableHead, TableBody, TableRow, TableCell } from './components/UI'
```

### Button Usage
```jsx
<Button variant="primary" size="md">Click Me</Button>
<Button variant="secondary" size="sm">Cancel</Button>
<Button variant="danger" size="md" disabled={isLoading}>Delete</Button>
<Button variant="ghost">Read More</Button>
```

### Form Pattern
```jsx
<Card className="p-6">
  <Input label="Email" type="email" required />
  <Input label="Name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
  <Button type="submit" className="mt-4">Submit</Button>
</Card>
```

### Data Table Pattern
```jsx
<Card className="overflow-hidden">
  <div className="overflow-x-auto">
    <table className="w-full">
      <thead className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
        <tr>
          <TableCell header>Column 1</TableCell>
          <TableCell header>Column 2</TableCell>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id} className="border-b border-[#E5E7EB] hover:bg-[#F9FAFB]">
            <td className="px-6 py-3">{item.name}</td>
            <td className="px-6 py-3">{item.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</Card>
```

### Loading State
```jsx
{isLoading ? (
  <Spinner size="lg" />
) : (
  <Content />
)}
```

### Empty State
```jsx
{items.length === 0 ? (
  <Card className="p-12 text-center">
    <p className="text-[#6B7280]">No items found</p>
  </Card>
) : (
  <ItemsList items={items} />
)}
```

## Spacing Scale Reference

```
px-0   = 0px
px-1   = 8px
px-2   = 16px
px-3   = 24px
px-4   = 32px
px-5   = 40px
px-6   = 48px

py-2   = 16px
py-3   = 24px
py-4   = 32px (tables, cards)
py-6   = 48px (sections)

gap-1  = 8px
gap-2  = 16px
gap-3  = 24px
gap-4  = 32px (grid spacing)
gap-6  = 48px
gap-8  = 64px
```

## Common Tailwind Classes

### Text
```
text-xs         (12px)
text-sm         (14px)
text-base       (16px)
text-lg         (18px)
text-2xl        (24px)
text-3xl        (30px)
text-4xl        (36px)
text-5xl        (48px)

font-medium     (500 weight)
font-semibold   (600 weight)
font-bold       (700 weight)

text-[#111827]  (primary text)
text-[#6B7280]  (muted text)
```

### Colors
```
bg-white        (#FFFFFF)
bg-[#F8FAFC]    (background)
bg-[#F9FAFB]    (hover backgrounds)
bg-[#2563EB]    (accent/primary button)
text-[#111827]  (primary text)
text-[#6B7280]  (secondary text)
border-[#E5E7EB] (borders)
```

### Layout
```
flex              (display: flex)
flex-col          (flex-direction: column)
gap-4             (spacing between children)
items-center      (align-items: center)
justify-between   (space-between)
w-full            (width: 100%)
max-w-3xl         (max-width: 768px)
rounded-lg        (border-radius: 8px)
rounded-xl        (border-radius: 12px)
rounded-full      (border-radius: 9999px)
```

### Effects
```
shadow            (subtle shadow)
shadow-lg         (larger shadow)
hover:shadow-lg   (on hover)
hover:bg-gray-100 (hover background)
hover:-translate-y-1 (lift effect)
transition-all    (smooth animation)
duration-200      (200ms animation)
```

## Common Props

### Button Props
```jsx
<Button
  variant="primary"      // primary, secondary, danger, ghost
  size="md"              // sm, md, lg
  disabled={false}       // boolean
  className="w-full"     // additional classes
  onClick={handler}      // click handler
  type="submit"          // button type
>
  Text
</Button>
```

### Input Props
```jsx
<Input
  type="email"           // text, email, password, number, etc.
  label="Email"          // optional label
  placeholder="text"     // placeholder text
  value={state}          // controlled input
  onChange={handler}     // change handler
  error="Error message"  // error text
  disabled={false}       // disabled state
  required={true}        // required field
/>
```

### Card Props
```jsx
<Card
  className="p-6"        // custom classes
  hover={true}           // enable hover lift
>
  Content
</Card>
```

### Badge Props
```jsx
<Badge
  variant="default"      // default, secondary, success, danger, muted
  size="md"              // sm, md, lg
  className=""           // additional classes
>
  Text
</Badge>
```

## State Management Pattern

```jsx
const [isLoading, setIsLoading] = useState(false)
const [error, setError] = useState('')
const [data, setData] = useState(null)

const fetchData = async () => {
  try {
    setIsLoading(true)
    setError('')
    const { data } = await axios.get('/api/endpoint')
    if (data.success) {
      setData(data.result)
      toast.success('Success!')
    } else {
      setError(data.message)
      toast.error(data.message)
    }
  } catch (error) {
    setError(error.message)
    toast.error(error.message)
  } finally {
    setIsLoading(false)
  }
}
```

## Form Validation Pattern

```jsx
const [errors, setErrors] = useState({})

const validateForm = () => {
  const newErrors = {}
  if (!email) newErrors.email = 'Email is required'
  if (!password) newErrors.password = 'Password is required'
  setErrors(newErrors)
  return Object.keys(newErrors).length === 0
}

const handleSubmit = async (e) => {
  e.preventDefault()
  if (!validateForm()) return
  // Submit form
}
```

## Responsive Design Pattern

```jsx
// Mobile-first approach
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map(item => (
    <Card key={item.id}>{item.name}</Card>
  ))}
</div>

// Hidden on mobile
<div className="hidden md:block">
  Desktop only content
</div>

// Different spacing
<div className="px-4 md:px-8 lg:px-12">
  Content
</div>
```

## API Integration Pattern

```jsx
import { useAppContext } from '../context/AppContext'

const MyComponent = () => {
  const { axios } = useAppContext()

  const fetchData = async () => {
    try {
      const { data } = await axios.get('/api/endpoint')
      if (data.success) {
        // Handle success
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message)
    }
  }
}
```

## Navigation Pattern

```jsx
import { useNavigate } from 'react-router-dom'

const MyComponent = () => {
  const navigate = useNavigate()

  return (
    <Button onClick={() => navigate('/path')}>
      Navigate
    </Button>
  )
}
```

## Date Formatting

```jsx
import Moment from 'moment'

// Format date
Moment(date).format('MMMM D, YYYY')    // February 26, 2026
Moment(date).fromNow()                  // 2 hours ago
Moment(date).toLocaleDateString()      // 2/26/2026
```

## Toast Notifications

```jsx
import toast from 'react-hot-toast'

toast.success('Operation successful!')
toast.error('An error occurred')
toast.loading('Loading...')
```

## Sidebar Navigation Pattern

```jsx
import { NavLink } from 'react-router-dom'

<NavLink
  to="/path"
  className={({ isActive }) =>
    `py-3 px-4 rounded ${isActive ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`
  }
>
  Menu Item
</NavLink>
```

## Modal Pattern

```jsx
import { Modal } from './components/UI'

<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Delete Item?"
  actions={
    <>
      <Button onClick={() => setIsOpen(false)} variant="secondary">
        Cancel
      </Button>
      <Button onClick={handleDelete} variant="danger">
        Delete
      </Button>
    </>
  }
>
  <p>Are you sure? This action cannot be undone.</p>
</Modal>
```

## Accessibility Checklist

- ✓ Semantic HTML (nav, article, section, aside)
- ✓ Focus states on all interactive elements
- ✓ Proper heading hierarchy
- ✓ Alt text on images
- ✓ Label associated with form inputs
- ✓ Color contrast ratio 4.5:1 for text
- ✓ Keyboard navigation support
- ✓ Error messages linked to inputs

## Common Issues & Solutions

### Issue: Styling not applied
**Solution**: Check if Tailwind class is correct and in content array

### Issue: Component not rendering
**Solution**: Check imports, verify component export default

### Issue: State not updating
**Solution**: Verify setState is called, check async operations

### Issue: API call failing
**Solution**: Check URL, verify headers, add error logging

### Issue: Mobile layout broken
**Solution**: Test responsive breakpoints, check padding/margins

## Useful Tailwind Playground
- https://tailwindcss.com/docs
- https://tailwindui.com/components

## File Structure Quick Reference

```
client/
├── src/
│   ├── components/
│   │   ├── UI/              ← Reusable components
│   │   ├── Admin/           ← Admin-specific
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── ...
│   ├── pages/               ← Page components
│   │   ├── Home.jsx
│   │   ├── Blog.jsx
│   │   └── Admin/
│   ├── context/             ← App context
│   ├── assets/              ← Images, data
│   ├── index.css            ← Global styles
│   ├── main.jsx
│   └── App.jsx
├── public/
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## Getting Started

1. **View a component**: `import { Button } from './components/UI'`
2. **Use in JSX**: `<Button variant="primary">Click</Button>`
3. **Add class**: `<Button className="w-full">Full Width</Button>`
4. **See all**: `/components/UI/index.js` barrel export

## Documentation Reference

- **Complete Guide**: `REFACTOR_DOCUMENTATION.md`
- **Design System**: `STYLE_GUIDE.md`
- **Implementation**: `IMPLEMENTATION_SUMMARY.md`
- **This File**: `QUICK_REFERENCE.md`

---

**Last Updated**: February 2026
**Audience**: Developers working on Blogify
**Status**: Production Ready
