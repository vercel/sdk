# CreateRecordRequestBody


## Supported Types

### `models.RequestBody1`

```typescript
const value: models.RequestBody1 = {
  name: "subdomain",
  type: "SRV",
  ttl: 60,
  value: "192.0.2.42",
  comment: "used to verify ownership of domain",
};
```

### `models.RequestBody2`

```typescript
const value: models.RequestBody2 = {
  name: "subdomain",
  type: "TXT",
  ttl: 60,
  value: "2001:DB8::42",
  comment: "used to verify ownership of domain",
};
```

### `models.RequestBody3`

```typescript
const value: models.RequestBody3 = {
  name: "subdomain",
  type: "A",
  ttl: 60,
  value: "cname.vercel-dns.com",
  comment: "used to verify ownership of domain",
};
```

### `models.RequestBody4`

```typescript
const value: models.RequestBody4 = {
  name: "subdomain",
  type: "CAA",
  ttl: 60,
  value: "0 issue \\"letsencrypt.org\\"",
  comment: "used to verify ownership of domain",
};
```

### `models.RequestBody5`

```typescript
const value: models.RequestBody5 = {
  name: "subdomain",
  type: "HTTPS",
  ttl: 60,
  value: "cname.vercel-dns.com",
  comment: "used to verify ownership of domain",
};
```

### `models.RequestBody6`

```typescript
const value: models.RequestBody6 = {
  name: "subdomain",
  type: "CNAME",
  ttl: 60,
  value: "10 mail.example.com.",
  mxPriority: 10,
  comment: "used to verify ownership of domain",
};
```

### `models.RequestBody7`

```typescript
const value: models.RequestBody7 = {
  type: "ALIAS",
  ttl: 60,
  srv: {
    priority: 10,
    weight: 10,
    port: 5000,
    target: "host.example.com",
  },
  comment: "used to verify ownership of domain",
};
```

### `models.RequestBody8`

```typescript
const value: models.RequestBody8 = {
  type: "CAA",
  ttl: 60,
  value: "hello",
  comment: "used to verify ownership of domain",
};
```

### `models.RequestBody9`

```typescript
const value: models.RequestBody9 = {
  name: "subdomain",
  type: "NS",
  ttl: 60,
  value: "ns1.example.com",
  comment: "used to verify ownership of domain",
};
```

### `models.RequestBody10`

```typescript
const value: models.RequestBody10 = {
  type: "ALIAS",
  ttl: 60,
  https: {
    priority: 10,
    target: "host.example.com",
    params: "alpn=h2,h3",
  },
  comment: "used to verify ownership of domain",
};
```

