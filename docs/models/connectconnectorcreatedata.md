# ConnectConnectorCreateData

Provider configuration. With type, provide the complete configuration for that type. With service and connectionMethod, provide only credentials and preferences; Connect supplies the type, endpoints, templates, and defaults. Other connector types accept an arbitrary object.


## Supported Types

### `models.TypeOauth`

```typescript
const value: models.TypeOauth = {
  clientId: "<id>",
};
```

### `models.TypeApiKey`

```typescript
const value: models.TypeApiKey = {};
```

### `models.TypeGithub`

```typescript
const value: models.TypeGithub = {
  appId: 937403,
  appSlug: "<value>",
  appName: "<value>",
  clientId: "<id>",
};
```

### `models.TypeLinear`

```typescript
const value: models.TypeLinear = {
  clientId: "<id>",
  clientSecret: "<value>",
};
```

### `models.TypeLinq`

```typescript
const value: models.TypeLinq = {
  apiToken: "<value>",
};
```

### `models.TypeSalesforce`

```typescript
const value: models.TypeSalesforce = {
  consumerKey: "<value>",
  consumerSecret: "<value>",
  loginHost: "<value>",
};
```

### `models.TypeSendblue`

```typescript
const value: models.TypeSendblue = {
  apiKeyId: "<id>",
  apiSecretKey: "<value>",
};
```

### `models.TypeSlack`

```typescript
const value: models.TypeSlack = {
  appId: "<id>",
  appName: "<value>",
  clientId: "<id>",
  clientSecret: "<value>",
};
```

### `models.TypeSnowflake`

```typescript
const value: models.TypeSnowflake = {
  accountIdentifier: "<value>",
};
```

### `models.TypeSnowflakeWif`

```typescript
const value: models.TypeSnowflakeWif = {};
```

### `models.TypePhoton`

```typescript
const value: models.TypePhoton = {
  projectId: "<id>",
  projectSecret: "<value>",
};
```

### `{ [k: string]: any }`

```typescript
const value: { [k: string]: any } = {
  "key": "<value>",
  "key1": "<value>",
  "key2": "<value>",
};
```

