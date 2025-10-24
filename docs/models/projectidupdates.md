# ProjectIdUpdates

Incrementally update project associations without specifying the full list

## Example Usage

```typescript
import { ProjectIdUpdates } from "@vercel/sdk/models/updatesharedenvvariableop.js";

let value: ProjectIdUpdates = {
  link: [
    "prj_2WjyKQmM8ZnGcJsPWMrHRHrE",
  ],
  unlink: [
    "prj_2WjyKQmM8ZnGcJsPWMrHRCRV",
  ],
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          | Example                                              |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `link`                                               | *string*[]                                           | :heavy_minus_sign:                                   | Project IDs to add to this environment variable      | [<br/>"prj_2WjyKQmM8ZnGcJsPWMrHRHrE"<br/>]           |
| `unlink`                                             | *string*[]                                           | :heavy_minus_sign:                                   | Project IDs to remove from this environment variable | [<br/>"prj_2WjyKQmM8ZnGcJsPWMrHRCRV"<br/>]           |