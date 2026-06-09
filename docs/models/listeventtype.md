# ListEventType

A user-facing event type.

## Example Usage

```typescript
import { ListEventType } from "@vercel/sdk/models/listeventtype.js";

let value: ListEventType = {
  name: "project-connect-configurations",
  description: "monocle jealous accurate vain obscure though",
  categories: [
    "deployment",
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `name`                                                                         | [models.Name](../models/name.md)                                               | :heavy_check_mark:                                                             | The name of the event type.                                                    | deployment-created                                                             |
| `description`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | Description of the event, visible to users in the Activity dashboard and docs. |                                                                                |
| `categories`                                                                   | [models.ListEventTypeCategories](../models/listeventtypecategories.md)[]       | :heavy_check_mark:                                                             | Categories that group this event type with related event types.                | [<br/>"deployment"<br/>]                                                       |
| `deprecated`                                                                   | *boolean*                                                                      | :heavy_minus_sign:                                                             | Present only when this event type is deprecated.                               |                                                                                |
| `replacedBy`                                                                   | [models.ReplacedBy](../models/replacedby.md)[]                                 | :heavy_minus_sign:                                                             | Event type names that supersede this deprecated event type.                    |                                                                                |